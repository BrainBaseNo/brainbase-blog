# BrainBase Blogg
 
 This Blog is built on Gatsby and runs on [Netlify] (https://netlify.com). 

_This blog is based on a a starter template [gatsby-starter-default] https://github.com/gatsbyjs/gatsby-starter-default_

## Writing a blog post

Step-by-step guide:  
1.  Go to `/blog`  
2.  Create a folder with a descriptive name like this: `first-blog-post` this will be the URL path to the blog post.  
3.  Inside of the created folder create a file called `index.md`. If you have any local images add them to this folder as well. 

### index.md layout
```
    ---
    title: First Blog Post
    date: "YYYY-MM-DDT12:00:00.000Z"
    author: "YOUR NAME HERE"
    author_image: "URL TO IMAGE" // Have to be square
    description: "My first blog post"
    ---

    [BLOG CONTENT HERE]

    Add images like this:
    
    ![IMAGE DESCRIPTION](./brain-green-dark-64.png) // Local
    ![IMAGE DESCRIPTION](https://www.brainbase.no/public/images/logo/brain-green-dark-64.png) // Remote

    Add links like this:

    [LINK TEXT](https://brainbase.no)

    Add emojis like this:

    :smile:

    Add a divider like this:

    ---

    Add a blockquote like this:

    > [QUOTE HERE]

```  

Checkout more [resources on writing markdown here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).  

Finish up the blog post and commit it to the repository. It will build and publish automatically.  

## Local development

### Getting started / running locally

1.  **Install the Gatsby CLI.**

    The Gatsby CLI helps you create new sites using Gatsby starters (-g is for global install).

    ```
    npm install -g gatsby-cli
    ```


2.  **Start developing.**

    ```
    cd brainbase-blog-v2/

    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    The project uses hot reloading, so changes you do is visible immidiately after you've saved a file.
    
## 🧐 What's inside?

(This text is from the starter project gatsby-starter-default)

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── assets
    ├── blog
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

  1.  **`/assets`**: This directory will contain all assets like images and icons.

  2.  **`/blog`**: This directory will contain all of the markdown blog articles with the related resources like images and such.

  3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
  
  4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
  
  5.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.
  
  6.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
  
  7.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  9.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
  
  10.  **`LICENSE`**: Gatsby is licensed under the MIT license.
  
  11.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).
  
  12.  **`package.json`**: Manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  13.  **`README.md`**: A text file containing useful reference information about this project.
  


## 💫 Deploy

The project is built and deployed to [Netlify](https://netlify.com) when new code is pushed to the master branch on bitbucket. 
