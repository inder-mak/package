import React from 'react'
import CMSContext from './ContextFile'
import ContentProvider from './ContentProvider'

export default WrappedComponent => props => (
  <ContentProvider>
    <CMSContext.Consumer>
      {({ cmsContent, cmsError, setData, loading }) => {
        return (<WrappedComponent
          {...props}
          cmsContent={cmsContent}
          cmsError={cmsError}
          setData={setData}
          loading={loading}
        />)
      }
      }
    </CMSContext.Consumer>
  </ContentProvider>
)

