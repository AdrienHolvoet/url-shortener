import { useForm } from "@mantine/form";
import { TextInput, Button, Stack, Card, Title, Center } from "@mantine/core";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { shortenUrlSchema } from "@url-shortener/shared/forms/urls";
import { useShortenUrlMutation } from "../queries/urls";

export const UrlShortener = () => {
  const form = useForm({
    initialValues: { originalUrl: "" },
    validate: zod4Resolver(shortenUrlSchema),
  });

  const { mutate: shortenUrl, isPending } = useShortenUrlMutation();

  const handleSubmit = form.onSubmit((values) => {
    shortenUrl(values);
  });

  return (
    <Center h="100vh">
      <Card withBorder w={480}>
        <Stack>
          <Title order={2}>Créer un nouveau lien</Title>
          <form onSubmit={handleSubmit}>
            <Stack>
              <TextInput
                label="URL à raccourcir"
                placeholder="https://example.com"
                {...form.getInputProps("originalUrl")}
              />
              <Button type="submit" loading={isPending}>
                Créer
              </Button>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Center>
  );
};
