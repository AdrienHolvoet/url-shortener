import { useForm } from "@mantine/form";
import { Card, Center } from "@mantine/core";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { shortenUrlSchema } from "@url-shortener/shared/forms/urls";
import { useShortenUrlMutation } from "../../queries/urls";
import { UrlShortenerForm } from "./UrlShortenerForm";
import { ShortUrl } from "./ShortUrl";
import Ad from "../../component/Ad";

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
        <Ad width={400} height={400} />
        <Ad width={800} height={250} />
      </Card>
    </Center>
  );
};
