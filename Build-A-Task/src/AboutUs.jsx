function AboutUs() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center p-10 bg-white shadow-lg rounded-lg max-w-md">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to our Task Tracker app! 🎯  
            <br />
            I built this React-powered task tracker using Tailwind CSS to keep things clean and responsive for all devices, including mobile users. 📱
          </p>
  
          <div className="py-4">
            <h2 className="pb-2 text-2xl font-medium">Features</h2>
            <div className="flex flex-col items-start">
              <ol className="text-left space-y-2">
                <li>✅ Add new tasks</li>
                <li>✅ Remove tasks</li>
                <li>✅ Mark tasks as complete</li>
                <li>✅ Edit tasks easily</li>
                <li>✅ Fully responsive design</li>
              </ol>
            </div>
          </div>
  
          {/* Back Button */}
          <a href="/" className="button-1">
            Go Back
          </a>
        </div>
      </div>
    );
  }
  
  export default AboutUs;
  
  