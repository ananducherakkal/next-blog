import styles from './BlogListingCard.module.scss'
import Link from 'next/link'

export default function BlogListingCard({ blog }) {
  if (blog) {
    return (
      <Link href={`/${blog.id}`}>
        <a className={`${styles.blogListingCard} flex-col`}>
          <img src={blog.image_url} alt="" className={`${styles.contentImage} img-cover`} />
          <div className={styles.content}>
            <div className={`${styles.contentTitle} uppercase text-14 semi-bold mb-14`}>
              {blog.category}
            </div>
            <h2 className={`${styles.contentHeading} text-16 first-capitalize bold mb-20`}>
              {blog.title}
            </h2>
            <p className={`${styles.contentDesc} text-14 text-light first-capitalize`}>
              {blog.description}
            </p>
          </div>
        </a>
      </Link>
    )
  }
  return (
    <div>
      somthign
    </div>  
  )  
}
