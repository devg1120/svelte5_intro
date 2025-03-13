import { f as fail, r as redirect } from "../../../../chunks/index2.js";
import { b as articleSchema, c as createArticle } from "../../../../chunks/articles.js";
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const validatedFields = articleSchema.safeParse({
      title: formData.get("title"),
      content: formData.get("content")
    });
    if (!validatedFields.success) {
      return fail(400, {
        errors: validatedFields.error.formErrors,
        fields: {
          title: formData.get("title"),
          content: formData.get("content")
        }
      });
    }
    await createArticle({
      title: validatedFields.data.title,
      content: validatedFields.data.content
    });
    redirect(303, "/articles");
  }
};
export {
  actions
};
