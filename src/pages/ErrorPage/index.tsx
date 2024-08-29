import { useNavigate, useRouteError } from "react-router-dom"
import { Button } from "antd"

import "./index.css"
import IconFont from "@/components/IconFont"

const ErrorPage = () => {

  const error: any = useRouteError()

  const navigate = useNavigate()

  return (
    <div className="error-page">
      <h1>抱歉，你遇到了错误！</h1>
      <h2>{error?.status} {error?.statusText || error?.message}</h2>
      <Button
        type="primary"
        icon={<IconFont type="icon-shouye1" size='1.2em' color="#fff" />}
        onClick={() => navigate('/')}
      >
        返回首页
      </Button>
    </div>
  )

}

export default ErrorPage