const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '',
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '',
};

export const isCloudinaryConfigured = () =>
  Boolean(cloudinaryConfig.cloudName && cloudinaryConfig.apiKey && cloudinaryConfig.uploadPreset);

export const getCloudinaryConfig = () => cloudinaryConfig;

export const uploadProductImage = async (file) => {
  if (!isCloudinaryConfigured()) {
    throw new Error('Cloudinary no está configurado. Usa las variables VITE_CLOUDINARY_* para activar cargas reales.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudinaryConfig.uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
    {
      method: 'POST',
      body: formData,
    },
  );

  if (!response.ok) {
    throw new Error('No fue posible subir la imagen a Cloudinary.');
  }

  const data = await response.json();
  return data.secure_url;
};
