import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import useStore from './Store'
import './styles.css'

function Overlay() {
  const loaded = useStore((state) => state.loaded)
  const clicked = useStore((state) => state.clicked)
  const api = useStore((state) => state.api)
  return (
    <>
      <div className={`fullscreen bg ${loaded ? 'loaded' : 'notready'} ${clicked && 'clicked'}`}>
        <div onClick={() => loaded && api.start()}>
          {!loaded ? (
            'loading'
          ) : (
            <>
              
              <b>
                <span style={{ color: 'black',border:'1px solid #00000099',padding:'5px' }}>click to continue</span>
              </b>
            </>
          )}
        </div>
      </div>
      
    </>
  )
}

createRoot(document.querySelector('#root')).render(
  <>
    <App />
    <Overlay />
  </>,
)
