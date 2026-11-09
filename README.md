# ABHI JAMES — GitHub Pages Portfolio

A responsive, cinematic-dark portfolio starter built with plain HTML, CSS and JavaScript. No build tools or paid hosting required.

## Preview locally
Open `index.html` in a browser. For the best local preview, use VS Code's Live Server extension.

## Publish with GitHub Pages
1. Create a GitHub repository named `abhi-james-portfolio` (or any name you prefer).
2. Upload **all files and folders** in this project to the repository root. Keep `index.html`, `style.css`, and `script.js` together.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait a minute or two. Your site will appear at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Personalise it before publishing
- Replace the sample project names, descriptions and categories in `index.html`.
- Replace the sample gradient project tiles with your own images. The easiest method:
  1. Put your image in `assets/images/`, e.g. `my-film.jpg`.
  2. In the relevant project card, replace its `img-one` class with a custom class or set the image inline, e.g. `style="background-image:url('assets/images/my-film.jpg')"`.
  3. Update the `data-image` attribute to the same image path so the project popup uses it.
- To add a video, upload it to YouTube or Vimeo and add an embed iframe in the project modal/content. Hosting large video files directly in a Git repository is not recommended.
- Change the email `hello@abhijames.com` and social links in `index.html` to your real contact details.
- Update the About section to your preferred bio.
- The hero and manifesto backgrounds currently use Unsplash image URLs. Replace them with your own licensed images if desired.

## Project categories
The filter buttons use `data-filter` values: `all`, `film`, `photo`, `edit`, and `design`. Each project card has a matching `data-category`.

## Notes
- This is a static site, so GitHub Pages can host it for free.
- Google Fonts and the two Unsplash hero images require an internet connection.
- Use images and music/video that you own or have permission to publish.
