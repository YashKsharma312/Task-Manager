require('../src/db/mongoose')
const Task=require('../src/models/task')

// Task.findByIdAndDelete('6367b9628077b3930eb2a314').then((task)=>{
//    console.log(task)
//    return Task.countDocuments({ completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount=async (id)=>{
    const task=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return count
}
deleteTaskAndCount('6367e571f4a3a28b6c99209a').then((count)=>{
      console.log(count)
     }).catch((e)=>{
         console.log(e)
     })