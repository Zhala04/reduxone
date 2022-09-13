import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BlogList from './pages/BlogList';
import { Provider } from 'react-redux';
import confStore from './store/confStore';
import { addBlog,removeblog,editblog } from './action/blogaction';
import AppRouter from './routers/AppRouter.jsx';
const store=confStore();

// Dispatch start
store.subscribe(()=>{
    console.log(store.getState())
})
// const blog1=store.dispatch(addblog({atitle:"Blackpink",adesc:"Pink Venom"}));
// console.log(blog1.blog.id)
// const blog2=store.dispatch(addblog({atitle:"One Direction",adesc:"Night Changes"}))
// store.dispatch(removeblog({id:blog1.blog.id}))
// store.dispatch(editblog(blog2.blog.id,{title:'akaksksk'}))

store.dispatch(addBlog({title:"HOT TOPICS IN DESIGN",desc:"Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials",img:'https://flow.qodeinteractive.com/flow2/wp-content/uploads/2016/01/0a-768x934.jpg'}))
store.dispatch(addBlog({title:"GETTING TO THE FINAL CUT",desc:"Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials",img:'https://flow.qodeinteractive.com/flow2/wp-content/uploads/2016/01/2-1a-768x512.jpg'}))
store.dispatch(addBlog({title:"DISCOVER YOUR WRITING STYLE",desc:"Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials",img:'https://flow.qodeinteractive.com/flow2/wp-content/uploads/2016/01/3a-900x600.jpg'}))
store.dispatch(addBlog({title:"GETTING THE RIGHT VIBE",desc:"Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials",img:'https://flow.qodeinteractive.com/flow2/wp-content/uploads/2016/01/3-1a-768x934.jpg'}))
store.dispatch(addBlog({title:"20 AWESOME DESIGN TIPS",desc:"Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials",img:'https://flow.qodeinteractive.com/flow2/wp-content/uploads/2016/01/16a-900x600.jpg'}))
store.dispatch(addBlog({title:"SYNCHING TO THE CLOUD",desc:"Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials",img:'https://flow.qodeinteractive.com/flow2/wp-content/uploads/2016/01/6-1a-768x768.jpg'}))
// store.dispatch(addblog({atitle:"Blackpink",adesc:"Pink Venom"}))
// store.dispatch(addblog({atitle:"Blackpink",adesc:"Pink Venom"}))
// Dispatch end

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouter />
    </Provider>
  </React.StrictMode>
);


