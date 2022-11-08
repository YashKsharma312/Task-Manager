require('../src/db/mongoose')
const { count } = require('../src/models/user')
const User=require('../src/models/user')

// User.findByIdAndUpdate('6367de3d8108395b0cf30973',{age:55}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:55})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age})
    const count=await User.countDocuments({age})
    return count
}
updateAgeAndCount('6367de3d8108395b0cf30973',25).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})