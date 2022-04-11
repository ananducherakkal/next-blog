import BlogPreview from '../../components/blog/BlogPreview'

export default function index() {
  const blog = {
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
  }
  return (
    <BlogPreview blog={blog} />
  )
}
