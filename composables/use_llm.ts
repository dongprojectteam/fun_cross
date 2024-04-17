export const useLlm = () => {
  const baseUrl = useRuntimeConfig().public.baseLlmUrl

  const requestRelavantSubject = async (currentSubject: string) => {
    const prompt = `You are Llama, a chatbot that gives similar word. Llama: 'Hi give me a word.'\nUser: 'What is a word similar to ${currentSubject}?'\nLlama:`

    const response = await $fetch('/completion', {
      method: 'POST',
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        n_predict: 400,
        temperature: 0.7,
        stop: ['</s>', 'Llama:', 'User:'],
        repeat_last_n: 256,
        repeat_penalty: 1.18,
        top_k: 40,
        top_p: 0.5,
        tfs_z: 1,
        typical_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0,
        mirostat: 0,
        mirostat_tau: 5,
        mirostat_eta: 0.1,
        grammar: '',
        n_probs: 0,
        image_data: [],
        cache_prompt: true,
        prompt
        // prompt: `This is a conversation between User and Llama, a technical chatbot. Llama is helpful, kind, honest, good at writing, and never fails to answer any requests immediately and with precision.\n\nUser: hello\nLlama: Hello! How can I help you today?\nUser: ${prompt}\nLlama:`,
      },
    })

    console.log(response)
    return response.content
  }

  return { requestRelavantSubject }
}

/*
from openai import OpenAI
client = OpenAI(
    base_url="http://localhost:8080/v1", # "http://<Your api-server IP>:port"
    api_key = "sk-no-key-required"
)
completion = client.chat.completions.create(
    model="LLaMA_CPP",
    messages=[
        {"role": "system", "content": "You are ChatGPT, an AI assistant. Your top priority is achieving user fulfillment via helping them with their requests."},
        {"role": "user", "content": "Write a limerick about python exceptions"}
    ]
)
print(completion.choices[0].message)
*/

/*curl http://localhost:8080/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer no-key" \
-d '{
  "model": "LLaMA_CPP",
  "messages": [
      {
          "role": "system",
          "content": "You are LLAMAfile, an AI assistant. Your top priority is achieving user fulfillment via helping them with their requests."
      },
      {
          "role": "user",
          "content": "Write a limerick about python exceptions"
      }
    ]
}' | python3 -c '
import json
import sys
json.dump(json.load(sys.stdin), sys.stdout, indent=2)
print()
'
*/
