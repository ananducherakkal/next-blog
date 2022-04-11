import styles from '../styles/Home.module.css'
import BlogListingCard from '../components/blog/BlogListingCard'
import { useState } from 'react'

export default function Home() {
  const [blogs, setBlogs] = useState([
    {
      "id": 1,
      "user_id": "fffe8d5b-78d2-471c-be77-6f826d87b1a1",
      "user": {
          "id": "fffe8d5b-78d2-471c-be77-6f826d87b1a1",
          "name": "Anandu",
          "email": "ananduca93@gmail.com",
          "phone": "1199222000",
          "password": "pbkdf2_sha256$320000$aw7zMWCfj9AhJN2ltHLzYG$aMS98OsCoIOj9RKKP81W/pr+NJ7eMFugp0iuhli/zXs="
      },
      "title": "Blog 1",
      "image_url": "https://cdn1.vectorstock.com/i/1000x1000/37/90/close-up-of-colorful-eyes-cat-vector-23633790.jpg",
      "description": "blog 1 descirpiton",
      "content": "<p><strong>blog cont</strong>etbt </p>"
    },
    {
      "id": 3,
      "user_id": "fffe8d5b-78d2-471c-be77-6f826d87b1a1",
      "user": {
          "id": "fffe8d5b-78d2-471c-be77-6f826d87b1a1",
          "name": "Anandu",
          "email": "ananduca93@gmail.com",
          "phone": "1199222000",
          "password": "pbkdf2_sha256$320000$aw7zMWCfj9AhJN2ltHLzYG$aMS98OsCoIOj9RKKP81W/pr+NJ7eMFugp0iuhli/zXs="
      },
      "title": "Blog 4",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1Q_jK6Wn_qT-N1y7li68-dWW1An7mxBAxQ&usqp=CAU",
      "description": "Blog 4 description",
      "content": "<h2>contentesdf dsfj kdlfjoid fa foj aifj fjdkfj dslfkj; fdj;dajf odj<strong>foidj flwejkfj dksfjhdfjuh afdh</strong>jldhfoljhfh df</h2><p><br></p><p>sdfdsfsdfdsf</p><p>dfdsfsdfdsf</p><p>dfdsfsdfdsf</p><p><br></p><p>dfdsfsdfdsf</p>"
    }
  ])
  console.log('blogs: ', blogs)
  return (
    <div className="page">
      {
        blogs && (
          <div className={`${styles.blogLisitng} grid-cols-3 justify-center`}>
            { blogs.map(blog => <BlogListingCard blog={blog} key={blog.id} />) }
          </div>
        )
      }
    </div>
  )
}
