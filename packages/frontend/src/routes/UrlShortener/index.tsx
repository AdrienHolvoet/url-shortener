import { useForm } from "@mantine/form";
import { Card, Center } from "@mantine/core";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { shortenUrlSchema } from "@url-shortener/shared/forms/urls";
import { useShortenUrlMutation } from "../../queries/urls";
import { UrlShortenerForm } from "./UrlShortenerForm";
import { ShortUrl } from "./ShortUrl";

export const UrlShortener = () => {
  const form = useForm({
    initialValues: { originalUrl: "" },
    validate: zod4Resolver(shortenUrlSchema),
  });

  const {
    mutate: shortenUrl,
    isPending: isShortenUrlPending,
    data: shortUrl,
    isSuccess: isShortenUrlSuccess,
    reset: resetShortenUrl,
  } = useShortenUrlMutation();

  const regenerateShortUrl = () => {
    resetShortenUrl();
    form.reset();
  };

  return (
    <Center h="100vh">
      <Card withBorder w={480}>
        {isShortenUrlSuccess ? (
          <ShortUrl shortUrl={shortUrl.data} regenerateShortUrl={regenerateShortUrl} />
        ) : (
          <UrlShortenerForm form={form} onSubmit={shortenUrl} isPending={isShortenUrlPending} />
        )}
      </Card>
    </Center>
  );
};
