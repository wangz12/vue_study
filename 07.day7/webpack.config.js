const path=require("path")
//webpack里已经有热替换需要的构造函数
const webpack=require("webpack")
//引入html-webpack-plugin
const HtmlWebpackPlugin=require("html-webpack-plugin")

module.exports={
    entry:path.join(__dirname,"./src/main.js"),   //入口文件
    output:{
        path:path.join(__dirname,"dist"),   
        filename:"bundle.js"    //这个文件在项目根目录的内存中,因此是看不见的
    },
    devServer:{
        port:3000,    //设置端口号
        open:true,    //默认自动打开浏览器
        hot:true,      //是否开启热替换
        // contentBase:"./src"     //设置默认托管的根目录,之后浏览器就会自动读取到这里面的文件
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),    //这里new这个构造函数表示是否具备开启热替换的资格
        new HtmlWebpackPlugin({
            template:"./src/index.html"     //这一步相当于创建了index.html托管在项目根目录上,也是内存中,并且它会自动引入前面的那个内存中的bundle.js
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [ "style-loader","css-loader","less-loader" ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|bmp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    mode:"development"
}