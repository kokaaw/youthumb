import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoId = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnails = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoId}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnails);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  const copyImageURL = (url) => {
    copy(url);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <div className="text-left">
          <img src="/favicon/favicon.ico" alt="Logo" className="mb-4" />
        </div>
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          Download high-quality thumbnails from YouTube videos.
        </p>
      </header>

      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <div></div>
                <button
                  className="btn-blue mt-2"
                  onClick={() => copyImageURL(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-8 text-center" style={{maxWidth: '1080px',marginTop: '30px',textAlign: 'justify'}}>
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p>
          Vous cherchez un moyen simple et efficace de télécharger les miniatures
          de vidéos YouTube en haute résolution ?<br />
          Ne cherchez pas plus loin ! Avec notre YouTube Thumbnail Downloader, vous pouvez obtenir en quelques
          étapes simples des miniatures de qualité pour toutes vos vidéos
          préférées.
        </p>
        
        <h2 className="text-xl font-semibold mb-4">Comment ça marche</h2>
          <p>Étape 1 : Copiez l'URL de la vidéo YouTube que vous souhaitez extraire la miniature.</p>
          <p>Étape 2 : Collez l'URL dans la barre de recherche de notre outil Thumbnail Downloader.</p>
          <p>Étape 3 : Cliquez sur le bouton "Télécharger les Miniatures".</p>
          <p>Étape 4 : Explorez les options de miniatures disponibles, y compris la résolution HD (1280x720), SD (640x480), Normal (480x360), Medium (320x180) et Low (120x90).</p>
          <p>Étape 5 : Cliquez sur "Copier l'URL de l'Image" pour enregistrer la miniature souhaitée.</p>
          <p><strong>Grâce à notre outil convivial, vous pouvez accéder à des miniatures de qualité supérieure pour un usage personnel ou professionnel. Que vous souhaitiez personnaliser vos vidéos, créer des vignettes accrocheuses pour votre chaîne YouTube, ou simplement collectionner vos moments préférés, notre YouTube Thumbnail Downloader est là pour vous simplifier la vie.</strong></p>
          <p>Essayez-le dès aujourd'hui et découvrez la commodité de notre outil Thumbnail Downloader. Téléchargez vos miniatures YouTube en un clin d'œil et faites briller votre contenu !</p>
      </div>
    </div>
  );
};

export default Index;
