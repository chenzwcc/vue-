export default{
    changeCity(ctx,city){ //第一个参数为上下文
        ctx.commit('changeCity',city) //通过上线文拿到对应的commit函数，然后调用mutations的changeCity方法，对state的City进行更改
    }
}