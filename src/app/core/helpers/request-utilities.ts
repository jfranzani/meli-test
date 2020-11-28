interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
/**
 * This will handle the fetch requests
 * @param request
 */
export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  response.parsedBody = await response.json();
  return response;
}
