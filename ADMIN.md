# Photo administration through GitHub

The gallery is managed in `gallery-data.js`. You do not need to edit the page HTML. The website reads the list in order and numbers the photos automatically.

## Set up administrator access when the repository is created

1. Create the public website repository under the administrator's own GitHub account. Use a unique password and enable two-factor authentication in the account's Settings → Password and authentication.
2. Upload the website files, including `gallery-data.js` and `assets/`. Keep GitHub Pages disabled until you are ready to publish.
3. In the repository's Settings → Collaborators, review who has access. If only the owner should make changes, do not add collaborators or other write-capable integrations or deploy keys.
4. To authorize a second administrator, invite their GitHub username as a collaborator. A personal repository collaborator can modify the whole repository, not just photos. Do not grant this access to ordinary visitors. The owner retains control of repository settings.
5. Once Pages is enabled on `main`, commits to that branch publish updates. Review changes before committing. Do not merge outside pull requests unless you have reviewed and want those changes.

Public means anyone can view or copy the published files. It does not give visitors permission to edit your repository or publish to your website. There is no separate login on the website; administrators sign into GitHub. No passwords, access tokens or credentials belong in any website file.

These steps are a setup guide, not confirmation that permissions are configured. Repository access must be checked on GitHub after the repository is supplied or created.

## Add photos from your browser

1. Sign into the authorized GitHub account and open the repository on the `main` branch.
2. Open `assets/gallery`, choose **Add file → Upload files**, and upload the new photos. Use unique names with letters, numbers and hyphens, such as `garden-tree-11.jpg`. Supported formats: JPG/JPEG, PNG, WebP and AVIF. Commit the upload. It will not appear in the gallery until listed in the next step.
3. Open `gallery-data.js` and select the pencil icon to edit.
4. Copy one existing photo object, paste it before the final `];`, and change its fields. Separate objects with commas. For example:

```js
  {
    "file": "assets/gallery/garden-tree-11.jpg",
    "caption": "Garden tree cutting",
    "alt": "Describe what is actually visible in this photo",
    "width": 960,
    "height": 1280
  }
```

5. Keep the opening `window.galleryPhotos = [` and closing `];` intact. Use actual image dimensions. Avoid quotation marks inside captions, or escape them as `\"`.
6. Review the edit and choose **Commit changes**. Once the site is live, allow its Pages deployment to finish, refresh the gallery and check the new image.

Keep images around 1000 pixels wide and ideally under 250 KB for fast mobile loading. Use only photos you have permission to publish.

## Edit, reorder or remove

- **Change text:** edit `caption` (visible label) and `alt` (image description).
- **Reorder:** move entire `{ ... }` entries within the list. The first entry appears first.
- **Remove from the gallery:** remove its entire entry and fix the surrounding comma. Remove the list entry before deleting the image file, to avoid a broken image on the live page. Deleting an entry alone leaves the image publicly accessible at its existing URL.
- **Replace an image:** upload a new uniquely named file and update the entry's `file`, dimensions and description. A new filename avoids old browser-cached photos.
- **Empty gallery:** use `window.galleryPhotos = [];` to show the empty-gallery message.
- **Correct a mistake:** reopen the list and fix the edit; GitHub's file History shows previous versions you can copy back. Wait for the next deployment and refresh.

A missing comma or quotation mark can stop the gallery loading, so change only the photo entries. The rest of the site continues to work if the data file cannot load.

## Official references

- Permissions: https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github
- Upload files: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Pages publishing: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
