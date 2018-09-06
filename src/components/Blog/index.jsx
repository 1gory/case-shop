import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import './article.css';
import getArticles from '../../functions/getArticles';
import BreadCrumbs from '../generic/BreadCrumbs';
import Header from '../Header';
import Footer from '../Footer';

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 22px;
  color: #4a4a4a;
  text-align: left;
`;

const H1 = styled.h1`
  font-family: 'Lato-Regular';
  font-size: 26px;
  color: #4a4a4a;
  text-align: left;
  
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Wrapper = styled.div`
  max-width: 970px;
  margin: 0 auto;
`;

const ArticlesWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const ArticleWrapper = styled.div`
  padding: 15px;
`;

const GoToArticleLink = styled(Link)`
  padding: 20px 0;
  display: inline-block; 
  font-family: 'Lato-Regular';
  color: #3b3b3b;
`;

const Delimiter = styled.hr`
  border: 0.5px solid #ccc;
  margin-top: 20px;
`;

const Description = styled.div`
  font-family: PT Serif,serif;
  font-size: 15px;
  line-height: 1.5;
  color: #3b3b3b;
  
  @media (min-width: 768px) {
    font-size: 19px;
  }
`;

const ArticlePreview = ({ title, shortDescription, url }) => (
  <ArticleWrapper>
    <Helmet>
      <title>Блог | Деревянные чехлы для iPhone Casewood</title>
    </Helmet>
    <H2>{title}</H2>
    <Description>{shortDescription}</Description>
    <GoToArticleLink to={`/blog/${url}`}>Читать далее </GoToArticleLink>
    <Delimiter />
  </ArticleWrapper>
);

const Article = ({ title, content }) => (
  <ArticleWrapper>
    <Helmet>
      <title>{title} | Casewood</title>
    </Helmet>
    <H1 className="article-title">{title}</H1>
    <Description>
      <div className="article" dangerouslySetInnerHTML={{ __html: content }} />
    </Description>
  </ArticleWrapper>
);

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };

    this.load = this.load.bind(this);
  }

  async componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(props) {
    this.load(props);
  }

  async load(props) {
    const urlParts = props.match.url.split('/');
    let articles;
    let singleArticle = false;
    if (urlParts[2]) {
      articles = await getArticles(urlParts[2]);
      singleArticle = true;
    } else {
      articles = await getArticles();
    }
    this.setState({
      articles,
      singleArticle,
    });
  }

  render() {
    const breadcrumbs = [
      { name: 'Блог', link: '/blog' },
    ];
    if (this.state.singleArticle) {
      breadcrumbs.push({ name: this.state.articles[0].title, link: `${this.state.articles[0].url}` });
    }
    return (
      <div>
        <Header />
        <Wrapper>
          <BreadCrumbs
            breadcrumbs={breadcrumbs}
          />
          <ArticlesWrapper>
            {this.state.articles && this.state.articles.map(article => (
              this.state.singleArticle ?
                <Article
                  title={article.title}
                  shortDescription={article.short_description}
                  url={article.url}
                  content={article.content}
                /> :
                <ArticlePreview
                  title={article.title}
                  shortDescription={article.short_description}
                  url={article.url}
                />
            ))}
          </ArticlesWrapper>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
