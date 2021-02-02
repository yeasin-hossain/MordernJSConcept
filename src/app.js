import './scss/app.scss';
import Header from './components/header.js';
import Post from './components/post.js';

const app = () => {
	document.querySelector('#header').innerHTML = Header;
	document.querySelector('#post').innerHTML = Post;
};

app();
