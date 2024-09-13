export const handleApiRequest = async (
  requestFunc,
  successMessage,
  notificationApi,
  setIsLoading
) => {
  setIsLoading(true);
  try {
    const { data, status } = await requestFunc();
    if (successMessage) {
      notificationApi.success({ message: successMessage });
    }

    return data || status;
  } catch (error) {
    const message = error?.response?.data?.message ?? "Something went wrong";
    notificationApi.error({ message });
  } finally {
    setIsLoading(false);
  }
};
