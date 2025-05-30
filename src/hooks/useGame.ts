import { useQuery } from "@tanstack/react-query";
import { Game } from "./useGames";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

export default useGame;
