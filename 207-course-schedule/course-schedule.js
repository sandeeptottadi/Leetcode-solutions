/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = {};
    for(let i=0;i<numCourses;i++) {
        graph[i] = [];
    }
    for(let i=0;i<prerequisites.length;i++) {
        graph[prerequisites[i][0]].push(prerequisites[i][1])
    }
    let visited = {};
    function dfs(course) {
         if(graph[course] === []) return true;
         if(course in visited) return false;
         visited[course] = true;
         let prereq = graph[course];
         for(let i=0;i<prereq.length;i++) {
             if(!dfs(prereq[i])) return false;
         }
         delete visited[course];
         graph[course] = [];
         return true;
    }
    for(let course in graph) {
        if(!dfs(course)) return false;
    }
    return true;
};