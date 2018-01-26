import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import getArticles from '../../functions/getArticles';
import BreadCrumbs from '../generic/BreadCrumbs';
import Header from '../Header';
import Footer from '../Footer';

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #4a4a4a
`;

const Wrapper = styled.div`

`;

const ArticlesWrapper = styled.div`
   max-width: 970px;
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

const Article = ({ title, singleArticle, shortDescription, content, url }) => (
  <ArticleWrapper>
    <Helmet>
      <title>Каталог | Деревянные чехлы для iPhone Casewood</title>
    </Helmet>
    <H2>{title}</H2>
    <Description>
      {!singleArticle ? shortDescription : <div dangerouslySetInnerHTML={{ __html: content }} />}
    </Description>
    {!singleArticle && <GoToArticleLink to={`/blog/${url}`}>Читать далее </GoToArticleLink>}
    <Delimiter />
  </ArticleWrapper>
);

const Delimiter = styled.hr`
  border: 0.5px solid #ccc;
`;

const Description = styled.div`
  font-family: 'Lato-Light';
  color: #3b3b3b;
`;

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
    return (<Wrapper>
      <Header />
      <ArticlesWrapper>
        <BreadCrumbs
          breadcrumbs={[
            { name: 'Блог', link: '/blog' },
          ]}
        />
        {this.state.articles && this.state.articles.map(article => (
          <Article
            singleArticle={this.state.singleArticle}
            title={article.title}
            shortDescription={article.short_description}
            url={article.url}
            content={article.content}
          />
        ))}
      </ArticlesWrapper>
      <Footer />
    </Wrapper>);
  }
}
