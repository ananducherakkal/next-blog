import styles from './BlogPreview.module.scss'

export default function BlogPreview({ blog }) {
  if (blog) {
    return (
      <div className={`${styles.blogPreview} flex-col`}>
        <img src={blog.image_url} className={`${styles.blogImage} img-cover`} />
        <div className={`${styles.content}`}>
          <h1 className={`${styles.contentTitle} text-42 bold mb-20 capitalize`}>
            { blog.title }
          </h1>
          <div className="text-18" v-html="blog.content" />
        </div>
      </div>
    )
  } else {
    return <div>No data available</div>
  }
}
