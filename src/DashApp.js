import React from 'react';
import './App.css';
import AppUsers from './components/appUser';

const authUsers = [
  {
    id: 1,
    src: "/images/blank_pics.png",
    fullName: "George James",
    nickName: "Climaxxy",
    status: "single",
    location: "Jahi Dist.",
    occupation: "Frontend Developer",
    bio: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo pariatur dolorem sunt voluptatem, facilis minusaperiam possimus autem, nemo at accusamus. Perferendis impedit id exercitationem voluptates enim saepe placeatquaerat?Omnis dolores ut earum praesentium repellat nisi impedit assumenda sunt sapiente distinctio mollitia tempore pariatur consequuntur nostrum ipsum quibusdam voluptatibus, at eligendi iure, exercitationem esse a dolorem nemo quas! Cumque. Molestiae, consequatur esse provident ullam ab totam nobis et, sit consectetur libero eum minus deserunt quia aliquid molestias illum? Delectus commodi voluptas deleniti repellendus necessitatibus officia voluptatum rerum    incidunt esse!"
  },
  {
    id: 2,
    src: "/images/blank_pics.png",
    fullName: "Victor Otene",
    nickName: "Asov1",
    status: "Serious Relationship",
    location: "Jahi Dist.",
    occupation: "Frontend Developer",
    bio: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo pariatur dolorem sunt voluptatem, facilis minusaperiam possimus autem, nemo at accusamus. Perferendis impedit id exercitationem voluptates enim saepe placeatquaerat?Omnis dolores ut earum praesentium repellat nisi impedit assumenda sunt sapiente distinctio mollitia tempore pariatur consequuntur nostrum ipsum quibusdam voluptatibus, at eligendi iure, exercitationem esse a dolorem nemo quas! Cumque. Molestiae, consequatur esse provident ullam ab totam nobis et, sit consectetur libero eum minus deserunt quia aliquid molestias illum? Delectus commodi voluptas deleniti repellendus necessitatibus officia voluptatum rerum    incidunt esse!"
  }
]

function DashApp() {
  return (
    <section>
      <AppUsers initialUsers={authUsers} />
    </section>
  );
}

export default DashApp;
