module.exports = {
  devServer: {
	host: 'localhost',
	port: 8000,
	proxy: {
	  '/api': {
		target: 'http://mall-pre.springboot.cn',
		changeOrigin: true,
		pathRewrite: {
		  '/api': ' '
		}
	  }
	}
  },
  // publicPath: '/app',
  // outputDir: 'dist',
  // indexPath: 'index.html',
  // lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
	config.plugins.delete('prefetch');
  }
  
}
