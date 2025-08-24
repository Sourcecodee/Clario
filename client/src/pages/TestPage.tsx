const TestPage = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Test Page Working!
        </h1>
        <p className="text-gray-600">
          If you can see this, the routing and rendering is working correctly.
        </p>
        <div className="mt-4 space-y-2">
          <a href="/" className="block text-blue-600 hover:underline">Go to Landing Page</a>
          <a href="/onboarding" className="block text-blue-600 hover:underline">Go to Onboarding Page</a>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
