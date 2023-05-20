export function YoutubeItem(props) {
    console.log(props)
    return (
        <div className='youtube-item'>
            <div className='youtube-image'>
                <img src={props.img} alt='' />
            </div>
            <div className='youtube-footer'>
                <img src={props.avata} alt='' className='youtube-avata' />
                <div className='youtube-info'>
                    <h3 className='youtube-title'>{props.title || 'no captions'}</h3>
                    <h4 className='youtube-author'>{props.author || 'no author'}</h4>
                </div>
            </div>
        </div>
    )
}

export default YoutubeItem;  // dong goi component de tai du sung
