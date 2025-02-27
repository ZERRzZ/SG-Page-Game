import { useNavigate, useRouteError } from "react-router-dom"

import "./index.css"
import Icon from "@/components/Icon"

const ErrorPage = () => {

  const error: any = useRouteError()

  const navigate = useNavigate()

  return (
    <div className="error-page">
      <h1>抱歉，你遇到了错误！</h1>
      <h2>{error?.status} {error?.statusText || error?.message}</h2>
      <button className="ep-homebtn" onClick={() => navigate('/')}>
        <Icon type="icon-home" />
        返回首页
      </button>
    </div>
  )

}

export default ErrorPage