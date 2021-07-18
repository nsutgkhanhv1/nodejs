const Course = require('../models/Course');

class CourseController{


    //[GET] /courses/:slug
    show(req,res,next){
        Course.findOne({slug: req.params.slug})
            .then(course=>{
                course == null ?
                res.send('404 NOT FOUND !!!') :
                res.render('courses/show',{course});
            })
            .catch(err=>{
                next(err)
            })
    }
    //[GET] /courses/create
    create(req,res,next){
        res.render('courses/create');
    }
    //[POST] /courses/store
    store(req,res,next){
        Course.findOne({videoId: req.body.videoId})
        .then(data=>{
            if(data){
                res.send('Course has already been created');
            }
            else{
                const course = new Course(req.body);
                course.save()
                .then(data=>{
                    res.redirect(`/courses/${req.body.slug}`);
                })
            }
        })
    }
    //[GET] /:id/edit
    showEditCourse(req,res,next){
        Course.findById(req.params.id)
        .then(data=>{
            res.render('courses/edit',{data});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    //[PUT] /:id/edit
    editCourse(req,res,next){
        Course.updateOne({_id: req.params.id},req.body)
        .then(data=>{
            res.redirect('/');
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

module.exports = new CourseController;