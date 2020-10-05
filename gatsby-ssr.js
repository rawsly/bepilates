import React from "react"
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([])
  setPostBodyComponents([
    <script key="corejs" src="/js/core.min.js" type="text/javascript" async/>,
    <script key="popper" src="/js/popper.min.js" type="text/javascript" async />,
    <script
      key="bootstrap"
      src="/js/bootstrap.min.js"
      type="text/javascript"
      async
    />,
    <script key="plugins" src="/js/plugins.min.js" type="text/javascript" async/>,
    <script key="typed" src="/js/typed.js" type="text/javascript" async/>,
    <script key="scripts" src="/js/scripts.js" type="text/javascript" async/>,
  ])
}
