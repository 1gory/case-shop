#!/bin/bash
# add defer attribute for script to build/index.js

sed -E -i 's/(src="\/static\/js\/main\.[a-z0-9]*\.js")/\1 defer/g' build/index.html
