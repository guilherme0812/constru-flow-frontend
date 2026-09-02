import LoginContent from "./components/loginContent"

function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen">
      <div className="col-span-1 md:col-span-5 relative overflow-hidden bg-blue-200 bg-[url('/src/assets/images/construction.jpg')] bg-center bg-cover"></div>

      <div className="col-span-1 md:col-span-7 flex items-center">
        <div className="max-w-96 w-full m-auto">
          <LoginContent />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
