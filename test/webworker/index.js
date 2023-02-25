// 浏览器中的多线程
// 浏览器中的编辑器
// http://localhost:8080/deep-thougth.js

// worker-loader
// import worker from 'webpack-loader:./deep-thought.worker.js'
// const worker = new Worker(worker);
const worker = new Worker('./deep-thought.js')

worker.postMessage({
  question:
    'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
});
worker.onmessage = ({ data: { answer } }) => {
  console.log(answer);
};