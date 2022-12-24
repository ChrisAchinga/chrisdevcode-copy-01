import Link from 'next/link'

const ArticleCard = () => {
  return (
    <div className='col-md-6 col-xl-4 mb-5'>
      <Link href='/articles/article-slug-here' legacyBehavior>
        <a className='card post-preview lift h-100'>
          <img
            className='card-img-top'
            src='https://source.unsplash.com/KE0nC8-58MQ/660x360'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>Invest In Social Impact</h5>
            <p className='card-text'>
              Expose the truth, problem-solvers impact mobilized green spaces.
            </p>
          </div>
          <div className='card-footer'>
            <div className='post-preview-meta'>
              <img
                className='post-preview-meta-img'
                src='assets/img/illustrations/profiles/profile-2.png'
              />
              <div className='post-preview-meta-details'>
                <div className='post-preview-meta-details-name'>
                  Aariz Fischer
                </div>
                <div className='post-preview-meta-details-date'>
                  Feb 4 · 5 min read
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ArticleCard
