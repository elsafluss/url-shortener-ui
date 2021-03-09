import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  const urlEls = props.urls.map((url, i) => {
    return (
      <div className="url" key={i}>
        <h3 className="url-title">{url.title}</h3>
        <a className="url-short" href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p className="no-urls">No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
