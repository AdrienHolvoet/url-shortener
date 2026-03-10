import { Button, TextInput, Title } from "@mantine/core";

import { Stack } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import type { ShortenUrlInput } from "@url-shortener/shared/forms/urls";

type Props = {
  form: UseFormReturnType<ShortenUrlInput>;
  onSubmit: (values: ShortenUrlInput) => void;
  isPending: boolean;
};

export const UrlShortenerForm = ({ form, onSubmit, isPending }: Props) => (
  <Stack>
    <Title order={2}>Raccourcir une longue URL</Title>
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <TextInput
          label="Collez votre URL ici"
          placeholder="https://example.com"
          {...form.getInputProps("originalUrl")}
        />
        <Button type="submit" loading={isPending}>
          Raccourcir
        </Button>
      </Stack>
    </form>
  </Stack>
);
