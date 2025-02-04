/*
    Insertion sort is another simple sorting algorithm.

    Its based on the notion of splitting the array into a sorted and unsorted portion. We compare the current element to the sorted portion and insert it in the correct position.
    This means we will use a while loop while decrementing the index of the sorted portion until we find the correct position to insert the current element.

    Insertion Sort vs Selection Sort

        Why Selection Sort is better:
            Selection sort is easier to implement
            Selection sort is better for linked lists because it does not require random access

        Why Insertion Sort is better:
            Insertion sort has a best case of O(n), average case of O(n^2), and a worst case of O(n^2), whereas selection sort will always be O(n^2). 
            Insertion sort is also adaptive, meaning it takes advantage of existing order in the array and sections that are already sorted.
            Insertion sort is stable, meaning it maintains the relative order of equal elements which is good for data integrity and consitency.
*/