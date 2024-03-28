import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

  const error: any = useRouteError()

  return (
    <>
      <h1>抱歉，你遇到了错误！</h1>
      <h2>{error?.status}，{error?.statusText || error?.message}</h2>
    </>
  )

}

export default ErrorPage