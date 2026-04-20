# /vn/ Moege Chart

## How to contribute


- Create a fork of the repository

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/7a781c98-f4a0-4199-8405-a1de62c27d5a" />

- Navigate to your fork and click on the ```src``` folder

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/3b60c76a-b23f-4017-8fae-f35f1bea30b9" />

- Navigate to the `src/views/assets/thumbnails` folder. Upload a jpg of the VN's game cover from it's vndb entry.

- Make sure it follows the same naming convention as the other files (name of the VN, all lower case letters, hyphen separated). If the cover's aspect ratio is very off, edit it to be about `300px` tall and matching the dimensions of the other images.

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/720f4910-23f4-4ea0-b9f0-e41b98b76263" />

- Once you have uploaded a proper image, hit `Commit changes`

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/4209de7a-8a61-4b17-8030-87e9bcff0170" />

- Navigate to `src/views/HomePage/Chart/visualNovelData.tsx`. Copy and paste one of the `import x from '..` lines and replace the relevant information as appropriate. For example, `import kami_pinkge from '../../assets/thumbnails/kami-pinkge.jpg';`.

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/b2116480-d95a-4bdf-b00c-704688516af3" />

- Scroll down and take note of the `VisualNovelProps` section. These are all possible fields you can fill out for a VN entry.

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/72c7f222-6359-4c74-80c2-eaa306d57894" />

- If you are adding a new entry, go to the bottom of the list and add it there. Make sure there are commas after every entry except the last one.

- If you are adding a sequel/FD, find the original's entry and slot your entry in afterwards.

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/40a143ea-ede3-4b66-836f-31a7a0cfdaa4" />

- Some fields have predefined options. You can check the `/utils.ts` file that is within the same folder as `visualNovelData.tsx` to see what you can use.
- Otherwise, refer to other entries as an example to see how you should format your entry.

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/2a4c96ca-c3de-4af4-9d51-9cada8569c46" />

- Once you've finished adding your entry, make sure you commit the changes (just like what you did for the file upload).
- After that, navigate to the `Pull requests` tab and create a `New pull request`

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/02749246-d0ec-41d2-ac76-4b2e17960c34" />

- When you create the pull request, make sure you have a descriptive title that mentions the name of the VN you're adding. Chartanon or I will review your PR before merging, in case there are any mistakes.

<img width="2518" height="1324" alt="Untitled" src="https://github.com/user-attachments/assets/4f0f44ac-952f-41cb-b3e9-8a047265c180" />

- You're done!
