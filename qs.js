 let arr=[]
 async function fetchData(url) {
  // Start the fetch request
  const responsePromise = fetch(url);
  
  // Apply a condition until the fetch is completed
  let isLoading = true;

  // Check the condition while waiting for the fetch to complete
  while (isLoading) {
      console.log("Fetching data...");
      // Add any condition you want to check here
      // For example, you might want to check a variable or update UI
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
      // Break the loop when the fetch is complete
      const response = await responsePromise;
      if (response.ok) {
          isLoading = false; // Exit the loop when fetch completes successfully
      }
  }

  // Now handle the response
  const data = await responsePromise; // Can also await it directly here
  return data.json(); // or data.text(), depending on the expected response
}

fetchData('https://opentdb.com/api.php?amount=10')
  .then(data => {
      // console.log("Data received:", data);
       arr=data
  })
  .catch(error => {
      console.error("Error fetching data:", error);
  });
  console.log(arr);
  