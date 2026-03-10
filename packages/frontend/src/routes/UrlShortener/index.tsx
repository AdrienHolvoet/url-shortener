import { useForm } from "@mantine/form";
import { Card, Title, Center } from "@mantine/core";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { shortenUrlSchema } from "@url-shortener/shared/forms/urls";
import { useShortenUrlMutation } from "../../queries/urls";
import { UrlShortenerForm } from "./UrlShortenerForm";

export const UrlShortener = () => {
  const form = useForm({
    initialValues: { originalUrl: "" },
    validate: zod4Resolver(shortenUrlSchema),
  });

  const { mutate: shortenUrl, isPending } = useShortenUrlMutation();

  return (
    <Center h="100vh">
      <Card withBorder w={480}>
        <Title order={2}>Créer un nouveau lien</Title>
        <UrlShortenerForm form={form} onSubmit={shortenUrl} isPending={isPending} />
      </Card>
    </Center>
  );
};
