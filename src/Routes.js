import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import login from './Login'
import signup from './Signup'

//faculty
import faculty_dashboard from './faculty/Dashboard';
import faculty_createnewCourse from './faculty/Create_newcourse'
import faculty_allcreatedcourses from './faculty/AllcreatedCourse'

// student
import student_dashboard from './student/Dashboard';
import student_profile from './student/Profile';
import register from './student/Register';
import mycourse from './student/Mycourses';

import blog from './Blog';

const Routes = () =>{
    return(
        <>
            <Switch>
                <Route exact path="/" component={blog} />
                <Route exact path="/signup" component={signup} />

                {/* faculty */}

                <Route exact path="/faculty/dashboard" component={faculty_dashboard} />
                <Route exact path="/faculty/createnewcourse" component={faculty_createnewCourse} />
                <Route exact path="/faculty/allcreatedcourses" component={faculty_allcreatedcourses} />
                
                
                
                {/* Student */}
                <Route exact path="/student/dashboard" component={student_dashboard} />
                <Route exact path="/student/Profile" component={student_profile} />
                <Route exact path="/student/register" component={register} />
                <Route exact path="/student/mycourse" component={mycourse} />
                

            </Switch>
        </>
    );
}

export default Routes;