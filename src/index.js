const express=require('express')
require('./db/mongoose')

const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app=express()
const port=process.env.PORT || 3000

// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('GETrequests are disabled')
//     }else{
//     next()}
// })

// app.use((req,res,next)=>{
//     res.status(503).send('site is down')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up on port'+ port)
})

const jwt=require('jsonwebtoken')

const myFunction=async()=>{
    const token=jwt.sign({_id:'abc123'},'thisishaha',{expiresIn:'7 days'})
    console.log(token)

    const data=jwt.verify(token,'thisishaha')
    console.log(data)
}

myFunction()