import heapq

def minCostToConnectRopes(arr):
    if not arr:
        return 0

    heapq.heapify(arr)  # Convert the list into a min heap

    total_cost = 0

    while len(arr) > 1:
        # Extract the two smallest ropes
        smallest1 = heapq.heappop(arr)
        smallest2 = heapq.heappop(arr)

        # Connect the two smallest ropes and add the cost
        current_cost = smallest1 + smallest2
        total_cost += current_cost

        # Insert the newly connected rope back into the heap
        heapq.heappush(arr, current_cost)

    return total_cost
