export const shareCurrentUrl = async () => {
  try {
    await navigator.share({
      url: window.location.href,
    })
  } catch (error) {
    console.error('Error sharing:', error)
  }
}