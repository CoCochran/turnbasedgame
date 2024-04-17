<html lang="en" class="font-mono">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In</title>
    <!-- Include Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body class='flex justify-center py-[10%]'>
<div class=" mx-[20%] text-center border border-red-800 py-20 shadow-md shadow shadow-gray-500 w-[25%]">
  <div class='my-5 text-2xl underline'>
    <h1>Log In</h1>
  </div>
    <form>

      <input class="rounded px-6 py-2" type="text" id="email" name="email" placeholder="Email Address"><br><br>
      <input class="rounded px-6 py-2" type="password" id="password" name="password" placeholder="Password"><br><br>

      <input class="bg-red-800 p-[10px] rounded-full text-white w-64" type="submit" value="Submit">
    </form>
</div>
</body>
</html>
