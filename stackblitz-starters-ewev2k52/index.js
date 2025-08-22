const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, "Student name is required"],

  },
  email:{
    type:String,
    required:[true,"Email is required"],
    unique:true

  },
  enrollmentDate:{
    type:Date,
    default:Date.now,
  },
  courses:[
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Course",
  },
  ],
});   
const courseSchema  = new mongoose.Schema({
  title: {
    type:String,
    required:[true,"course title is required"],

  },
  description:{
    type: String,

  },
  durationWeeks:{
    type: Number,
    required: true,
  },
  instructor: {
    type: String,
    required: [true, "Instructor name is required"],
    
  },


});
const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);
module.exports = { Student, Course };
